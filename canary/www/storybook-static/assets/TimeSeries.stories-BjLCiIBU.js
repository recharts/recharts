import{e}from"./iframe-Br4eYoVn.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C8A1sscS.js";import{R as y}from"./arrayEqualityCheck-BTssjmx8.js";import{C as g}from"./ComposedChart-DO9Baogr.js";import{L as x}from"./Line-CjfZ9drr.js";import{R as S}from"./RechartsHookInspector-CJ4a_N61.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CCjKFVY6.js";import{T as V}from"./Tooltip-C7klFK4K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DnfdLPHJ.js";import"./Layer-BXiy0Hpp.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./Label-CUHpuvtr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkFJTbU_.js";import"./zIndexSlice-C3EiH9DM.js";import"./immer-DPmqhqsD.js";import"./types-Bdr3PbTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./hooks-qMCGdphr.js";import"./axisSelectors-CHWOzT-A.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./ReactUtils-Dn-n-3Yl.js";import"./ActivePoints-BJ31ITZc.js";import"./Dot-ec03_cyV.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./ErrorBarContext-B31x6VGT.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./useAnimationId-7Mhr-lzJ.js";import"./getRadiusAndStrokeWidthFromDot-DtONMN5t.js";import"./ActiveShapeUtils-C1KBE52j.js";import"./isPlainObject-Dnct6C6Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnOsz_oj.js";import"./Trapezoid-CWbkVsvx.js";import"./Sector-DL1xggZ9.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";import"./step-DYF_aI-7.js";import"./Curve-C9oEn5cY.js";import"./index-B-JygPoA.js";import"./ChartSizeDimensions-DeYSdXrS.js";import"./OffsetShower-B3belhb8.js";import"./PlotAreaShower-DSu4MaQt.js";import"./useElementOffset-BqlbwxZo.js";import"./uniqBy-ByNeAQ4B.js";import"./iteratee-B-3U5ZDw.js";import"./Cross-8Y80D0dQ.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
