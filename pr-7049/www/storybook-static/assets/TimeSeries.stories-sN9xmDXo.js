import{e}from"./iframe-BSrWh3Tm.js";import{X as s}from"./XAxis-B42vfkRT.js";import{R as y}from"./arrayEqualityCheck-Bi3wam60.js";import{C as g}from"./ComposedChart-CrYrETUO.js";import{L as x}from"./Line-CHf68RI_.js";import{R as S}from"./RechartsHookInspector-GGOykVwh.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-B1u95Bta.js";import{T as V}from"./Tooltip-D0FKLk7T.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DpJRxyLl.js";import"./Layer-QGYU9n-M.js";import"./resolveDefaultProps-uX8ktvRe.js";import"./Text-DUnGW5EL.js";import"./DOMUtils-BZKI_dtW.js";import"./Label-Bl_LjQTl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D38UhR7u.js";import"./zIndexSlice-DiVky1C5.js";import"./immer-o57FzM7P.js";import"./types-CM9WDYf0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-XfGhYDN5.js";import"./hooks-_Zpl3P7b.js";import"./axisSelectors-DaFs4qrj.js";import"./RechartsWrapper-Cv7vOboh.js";import"./index-BKQB3IdD.js";import"./CartesianChart-C6stOvQo.js";import"./chartDataContext-BZoBhnnC.js";import"./CategoricalChart-K47yLqM7.js";import"./ReactUtils-CJRrmQRl.js";import"./ActivePoints-CNGhXiVX.js";import"./Dot-CDS9zqsC.js";import"./RegisterGraphicalItemId-otp8Qv4N.js";import"./ErrorBarContext-CUS8wCir.js";import"./GraphicalItemClipPath-K1LYOcWQ.js";import"./SetGraphicalItem-DrkBT3YT.js";import"./useAnimationId-DcrpwOmI.js";import"./getRadiusAndStrokeWidthFromDot-MRSXLGiq.js";import"./ActiveShapeUtils-CHgfreMM.js";import"./isPlainObject-D_XWLGeo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZDPWd6o.js";import"./Trapezoid-DEogtWZp.js";import"./Sector-Clje0fKa.js";import"./Symbols-DUq2FcPQ.js";import"./symbol-Bmu8h110.js";import"./step-D7Xw_JZz.js";import"./Curve-Y05R0_Dg.js";import"./index-D7iJ4ctw.js";import"./ChartSizeDimensions-DsBX0MPa.js";import"./OffsetShower-DXc8wSG5.js";import"./PlotAreaShower-C59CIyfR.js";import"./useElementOffset-DSe2TnxD.js";import"./uniqBy-C5sONUWO.js";import"./iteratee-Dnsy_OoO.js";import"./Cross-BeZdZItx.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
