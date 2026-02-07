import{e}from"./iframe-BGwjwh7b.js";import{X as s}from"./XAxis-DS9Xkr-k.js";import{R as y}from"./arrayEqualityCheck-Ci--b7kw.js";import{C as g}from"./ComposedChart-BM67LJyk.js";import{L as x}from"./Line-DnJu1JFJ.js";import{R as S}from"./RechartsHookInspector-VWahaYTL.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-DZSZvNV6.js";import{T as O}from"./Tooltip-B0klRuxw.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4_jkDd5.js";import"./CartesianAxis-C6FwbBuH.js";import"./Layer-g7-Im1O-.js";import"./Text-BJbt4-uX.js";import"./DOMUtils-B5Va_Rd3.js";import"./Label-ByJ0Zn7t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlpEyICK.js";import"./zIndexSlice-CqqXeG-S.js";import"./types-DiIJ1tuj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BrtJ2K4-.js";import"./RechartsWrapper-hK7FM4lj.js";import"./CartesianChart-5LhnS4ee.js";import"./chartDataContext-CifXIRqa.js";import"./CategoricalChart-BOR7W1TN.js";import"./ReactUtils-0GYQhZAx.js";import"./ActivePoints-DsWvMRWX.js";import"./Dot-a7SSIrAW.js";import"./RegisterGraphicalItemId-D86zanCr.js";import"./ErrorBarContext-CNFPOgVB.js";import"./GraphicalItemClipPath-CbnJI2Ms.js";import"./SetGraphicalItem-CfxChqbu.js";import"./useAnimationId-CRoY-omv.js";import"./getRadiusAndStrokeWidthFromDot-Dha7chAz.js";import"./ActiveShapeUtils-BcFn4-44.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpPiBfe5.js";import"./Trapezoid-yFda2MLs.js";import"./Sector-CnD_zSeQ.js";import"./Symbols-CA485AuF.js";import"./Curve-Bx03x7Y9.js";import"./index-5-nk5biS.js";import"./ChartSizeDimensions-ewe-wGZ_.js";import"./OffsetShower-CVJaT1Gz.js";import"./PlotAreaShower-Cbm_qyV0.js";import"./useElementOffset-Dh036-Py.js";import"./iteratee-CHyJYDTY.js";import"./Cross-BTD1rZhN.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
