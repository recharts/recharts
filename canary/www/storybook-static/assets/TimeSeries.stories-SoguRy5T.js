import{e}from"./iframe-DerYKIzi.js";import{X as s}from"./XAxis-Bgvn5DCx.js";import{R as y}from"./arrayEqualityCheck-BjVe0Fqi.js";import{C as g}from"./ComposedChart-DIipW_Ve.js";import{L as x}from"./Line-BHRwnsUf.js";import{R as S}from"./RechartsHookInspector-6OICS92a.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-D2mivk7c.js";import{T as O}from"./Tooltip-07R-OjPL.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./CartesianAxis-CgnzR7dE.js";import"./Layer-D3SGVv1F.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./Label-Dcc5xZ5Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4AZig9C.js";import"./zIndexSlice-Dl8TZiao.js";import"./types-aH4hB60Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bufm5eM3.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./ReactUtils-C811ViG8.js";import"./ActivePoints-CnKH4Xhf.js";import"./Dot-B8Z8LHGX.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./ErrorBarContext-B9auALKr.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./useAnimationId-Q_ju2aFP.js";import"./getRadiusAndStrokeWidthFromDot-JmC9apyq.js";import"./ActiveShapeUtils-BHypxLS_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2nS0zsop.js";import"./Trapezoid-BqTiWmsP.js";import"./Sector-KrvgbNAg.js";import"./Symbols-BsidgTnn.js";import"./Curve-HbHV5hCk.js";import"./index-Baa4xFqo.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./OffsetShower-CcEDeZ1H.js";import"./PlotAreaShower-lQ69SKO-.js";import"./useElementOffset-BQTTbTDB.js";import"./iteratee-B5c8PfHS.js";import"./Cross-QYzDDHEd.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
