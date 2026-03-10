import{e}from"./iframe-DHjTBwa0.js";import{X as s}from"./XAxis-DzpQW1k6.js";import{R as y}from"./arrayEqualityCheck-CGXWmECa.js";import{C as g}from"./ComposedChart-CoHd_5kA.js";import{L as x}from"./Line-CcCWzQUu.js";import{R as S}from"./RechartsHookInspector-D6nhtH8K.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BUA-RFqD.js";import{T as V}from"./Tooltip-CFb1u5nY.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D9ZJukHE.js";import"./Layer-CoFjoalk.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./Label-DMGH-XEw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWpbiknC.js";import"./zIndexSlice-DqtSbfBR.js";import"./immer-BrXT1eSW.js";import"./types-B-PC6Emj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./RechartsWrapper-DyX2fUcK.js";import"./index-BPCnijYz.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./ReactUtils-DXoYQqwM.js";import"./ActivePoints-Blqf8jQG.js";import"./Dot-BsheDtZT.js";import"./RegisterGraphicalItemId-DKDKYGnd.js";import"./ErrorBarContext-By3ClU9F.js";import"./GraphicalItemClipPath-CGzigbYh.js";import"./SetGraphicalItem-XHeepBo6.js";import"./useAnimationId-C2i6VIVJ.js";import"./getRadiusAndStrokeWidthFromDot-GPi5Uiju.js";import"./ActiveShapeUtils-9h77ymCT.js";import"./isPlainObject-DLGkOX2v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj02ipMQ.js";import"./Trapezoid-DxOEh9VV.js";import"./Sector-CIZ18yvj.js";import"./Symbols-CnglQ83s.js";import"./symbol-LmxUlDu5.js";import"./step-C25GYkrO.js";import"./Curve-DPzG6TNm.js";import"./index-CGH8qd9t.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";import"./useElementOffset-DvcdPDwX.js";import"./uniqBy-D8yyZ5is.js";import"./iteratee-D4JFKxme.js";import"./Cross-BJreZDFL.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
