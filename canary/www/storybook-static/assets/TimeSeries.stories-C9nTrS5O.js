import{e}from"./iframe-O9ArEVIv.js";import{X as s}from"./XAxis-Cej5L1H9.js";import{R as y}from"./arrayEqualityCheck-C-MTCypy.js";import{C as g}from"./ComposedChart-DUOXRuR9.js";import{L as x}from"./Line-D___p7Tz.js";import{R as S}from"./RechartsHookInspector-16YUtyRB.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CJB90U0O.js";import{T as V}from"./Tooltip-I2d454qP.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Ds14BfSb.js";import"./Layer-Bs1IQ35S.js";import"./resolveDefaultProps-Cjflm227.js";import"./Text-DQdIz477.js";import"./DOMUtils-dyLmYPqX.js";import"./Label-CEXSNWpb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-gMxYNdgc.js";import"./zIndexSlice-Sxdp-diY.js";import"./immer-BFzhs2u-.js";import"./types-CsxGUr-v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BvOqc92I.js";import"./hooks-CqiKktT9.js";import"./axisSelectors-CwHYpHLU.js";import"./RechartsWrapper-DOYlziR8.js";import"./index-a21uXOx0.js";import"./CartesianChart-z72RSBTa.js";import"./chartDataContext-B4Ztt00m.js";import"./CategoricalChart-C-oRlLv7.js";import"./ReactUtils-BfiyyF4-.js";import"./ActivePoints-B-r9b2zj.js";import"./Dot-DQnHVWph.js";import"./RegisterGraphicalItemId-CLKZixP7.js";import"./ErrorBarContext-Caa3uBDH.js";import"./GraphicalItemClipPath-FlIwAJHm.js";import"./SetGraphicalItem-Cl8ON75H.js";import"./useAnimationId-DFOXeF_s.js";import"./getRadiusAndStrokeWidthFromDot-B3pdC8wU.js";import"./ActiveShapeUtils-Cu-_wtkP.js";import"./isPlainObject-BMtTHHOe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTyUjMdM.js";import"./Trapezoid-BgYcRPYD.js";import"./Sector-CeOtRqWC.js";import"./Symbols-BsW0CkYV.js";import"./symbol-D8ksNROS.js";import"./step-CooRIyZW.js";import"./Curve-BaetafJM.js";import"./index-CKq64LI9.js";import"./ChartSizeDimensions-BSf1VGM1.js";import"./OffsetShower-DBynPTQJ.js";import"./PlotAreaShower-DzB7vB8a.js";import"./useElementOffset-yd24ysTP.js";import"./uniqBy-O6huRSpu.js";import"./iteratee-P-PQVcPP.js";import"./Cross-Cq_HtlZn.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
