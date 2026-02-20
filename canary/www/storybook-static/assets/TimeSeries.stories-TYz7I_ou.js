import{e}from"./iframe-uVZDwAjj.js";import{X as s}from"./XAxis-DDi_F3ms.js";import{R as y}from"./arrayEqualityCheck-BVLp_fP4.js";import{C as g}from"./ComposedChart-C98EWxS3.js";import{L as x}from"./Line-C4f_JiI9.js";import{R as S}from"./RechartsHookInspector-B8IZQaM2.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-0GkopIXO.js";import{T as V}from"./Tooltip-C8tgEoay.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D-nGvafv.js";import"./Layer-kSeehgUS.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./Label-PDV3rnUf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6kXppYb.js";import"./zIndexSlice-CLyAXc3q.js";import"./immer-ChwPqFH_.js";import"./types-B-Xhkkhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./ReactUtils-CdVDZBtJ.js";import"./ActivePoints-DaG8bHlJ.js";import"./Dot-DIb3YsWy.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./ErrorBarContext-yNZJHACW.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./useAnimationId-CLB64h0U.js";import"./getRadiusAndStrokeWidthFromDot-ClrcQxIA.js";import"./ActiveShapeUtils-DdtpNjHl.js";import"./isPlainObject-DmqrNdKc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-GgKpEWLk.js";import"./Trapezoid-B50tZYZr.js";import"./Sector-CYoBZdRL.js";import"./Symbols-DYdrpw_H.js";import"./symbol-D_mOxO35.js";import"./step-Prvlnfgp.js";import"./Curve-BRxcZY_5.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";import"./useElementOffset-BuGSMy6j.js";import"./uniqBy-DdcvsSSb.js";import"./iteratee-C0JMveWz.js";import"./Cross-Bonq6Yvc.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
