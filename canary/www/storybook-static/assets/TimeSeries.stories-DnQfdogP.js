import{e}from"./iframe-BaY_xsSZ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ViYQKBdh.js";import{R as y}from"./arrayEqualityCheck-Bdjqc4Ae.js";import{C as g}from"./ComposedChart-4BbEyXcR.js";import{L as x}from"./Line-BUwsNwDj.js";import{R as S}from"./RechartsHookInspector-BZJAdbFr.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DIZez8ZA.js";import{T as V}from"./Tooltip-CmuUZ6lx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CxJxU8_8.js";import"./Layer-04iznQcl.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./Label-B4b2gNZT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzH8oXrO.js";import"./zIndexSlice-CtFEU_Ni.js";import"./immer-BxBygCNY.js";import"./types-BZAl2150.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./RechartsWrapper-DGEkw1V9.js";import"./index-BSMrFEqd.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./ReactUtils-B7IYIUp3.js";import"./ActivePoints-t-qLyG_8.js";import"./Dot-BqkojDsv.js";import"./RegisterGraphicalItemId-x5Fjg9Mp.js";import"./ErrorBarContext-hvPjdfRQ.js";import"./GraphicalItemClipPath-C_oN7uRQ.js";import"./SetGraphicalItem-13HzTRgX.js";import"./useAnimationId-CntPUL-4.js";import"./getRadiusAndStrokeWidthFromDot-BrRZUxyx.js";import"./ActiveShapeUtils-CAoRm2wW.js";import"./isPlainObject-DluGOkEU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHMEhJP1.js";import"./Trapezoid-DZ8rNB7q.js";import"./Sector-c_JEoVhU.js";import"./Symbols-D6WgJo03.js";import"./symbol-N8c7H1tN.js";import"./step-CLF9a_rc.js";import"./Curve-B7UPBPeR.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";import"./useElementOffset-CP6WPjsc.js";import"./uniqBy-CrxusMQm.js";import"./iteratee-BK5pxv5Q.js";import"./Cross-B8xeSogi.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
