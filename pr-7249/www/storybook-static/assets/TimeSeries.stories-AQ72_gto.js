import{e}from"./iframe-BL30a25n.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BuEHyROH.js";import{R as y}from"./arrayEqualityCheck-CTdhw7v2.js";import{C as g}from"./ComposedChart-CwvxB3E8.js";import{L as x}from"./Line-K5AsLX-F.js";import{R as S}from"./RechartsHookInspector-CKAPvAcq.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DN4NcrYH.js";import{T as V}from"./Tooltip-CGzfh5OP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-6XJOi0JN.js";import"./Layer-DbzzoT5W.js";import"./resolveDefaultProps-Dhgfu696.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./Label-tOosDzC9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./zIndexSlice-DuEq0Nzw.js";import"./immer-BLjYPncX.js";import"./types-DngVF1gy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BNblKiJo.js";import"./hooks-Bu6pJnUO.js";import"./axisSelectors-CmxwFFvW.js";import"./RechartsWrapper-CSatPt3_.js";import"./index-DaX2Q3AK.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./ReactUtils-CvEgiikN.js";import"./ActivePoints-DLmu87F_.js";import"./Dot-D_x5JJ0f.js";import"./RegisterGraphicalItemId-NIdQMjW7.js";import"./ErrorBarContext-C--UypnL.js";import"./GraphicalItemClipPath-CvO0vgi7.js";import"./SetGraphicalItem-DqX3zCIa.js";import"./useAnimationId-StTSWEFx.js";import"./getRadiusAndStrokeWidthFromDot-BWR1tZh1.js";import"./ActiveShapeUtils-DyYtBEWy.js";import"./isPlainObject-DHekL-Pq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dbi9MvBK.js";import"./Trapezoid-DF1LPrGo.js";import"./Sector-By56eltg.js";import"./Symbols-DWmX7Ql_.js";import"./symbol-DiJYHTEZ.js";import"./step-COhLjfgX.js";import"./Curve-C9Gn1Z7l.js";import"./index-CJGBDWaZ.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./OffsetShower-D6jdoegT.js";import"./PlotAreaShower-CDPFlOoQ.js";import"./useElementOffset-BRFRz_JX.js";import"./uniqBy-DLUxpX6I.js";import"./iteratee-D6pKSZwg.js";import"./Cross-BqARO_ay.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
