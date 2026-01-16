import{e}from"./iframe-BhN7WL5Z.js";import{X as s}from"./XAxis-BkxM2U5C.js";import{R as y}from"./arrayEqualityCheck-D4vVSxnz.js";import{C as g}from"./ComposedChart-MPi4Nq7B.js";import{L as x}from"./Line-DC0X09Zk.js";import{R as S}from"./RechartsHookInspector-DuzZFa2V.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-BCCMRHlB.js";import{T as O}from"./Tooltip-CNEd35QC.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BPD9bTh0.js";import"./CartesianAxis-CsSTEuVM.js";import"./Layer-CfPqbk4S.js";import"./Text-PQiv9oDi.js";import"./DOMUtils-CqVI9jgk.js";import"./Label-DbCyuY2T.js";import"./PolarUtils-DA1Z2LDM.js";import"./ZIndexLayer-C8mR-iMG.js";import"./zIndexSlice-wy9BZePe.js";import"./types-D2HNEHHU.js";import"./hooks-EmXHGT5T.js";import"./CategoricalChart-BDJKnV04.js";import"./RechartsWrapper-ngVbXQIL.js";import"./CartesianChart-DIFYt1Ja.js";import"./chartDataContext-Dmy6E_I7.js";import"./ReactUtils-C4jZBCSK.js";import"./ActivePoints-C2WvuJKe.js";import"./Dot-DJcxz675.js";import"./RegisterGraphicalItemId-DQrs3EuT.js";import"./ErrorBarContext-CR9IxJro.js";import"./GraphicalItemClipPath-DtY2K5G-.js";import"./SetGraphicalItem-DwcdpMKU.js";import"./useAnimationId-BWf0K4Q5.js";import"./getRadiusAndStrokeWidthFromDot-CK7f_m59.js";import"./ActiveShapeUtils-rfu0ISSo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXwR0_dr.js";import"./Trapezoid-CAfSVxJ4.js";import"./Sector-DW4oDqQS.js";import"./Symbols-BSDl9S1a.js";import"./Curve-BUxUFTVS.js";import"./index-AX7IXW21.js";import"./ChartSizeDimensions-BBuJ0j_U.js";import"./OffsetShower-6CzCe99R.js";import"./PlotAreaShower-CAbHCjr4.js";import"./useElementOffset-Chq47f3C.js";import"./iteratee-DHMA5jED.js";import"./Cross-C5WS2Xdo.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
