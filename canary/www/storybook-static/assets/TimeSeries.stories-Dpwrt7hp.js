import{e}from"./iframe-DzhPvN_j.js";import{X as s}from"./XAxis-DZpORi3T.js";import{R as y}from"./arrayEqualityCheck-BbmOyD_G.js";import{C as g}from"./ComposedChart-HheWKBIJ.js";import{L as x}from"./Line-BC7PGKux.js";import{R as S}from"./RechartsHookInspector-DDr9RNlY.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-Cb1pH4Jp.js";import{T as V}from"./Tooltip-CkK3FoC6.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CcEKfal4.js";import"./Layer-Ckqyyj_I.js";import"./resolveDefaultProps-D5C472LP.js";import"./Text-BqZmDUPE.js";import"./DOMUtils-vP3gppvy.js";import"./Label-CHDEQY5T.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-9g5l0O9I.js";import"./zIndexSlice-5RAhS0gW.js";import"./immer-DMYiXdM8.js";import"./types-9iuX30XL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DXS4yQsn.js";import"./hooks-Cd6CKD6W.js";import"./axisSelectors-OzG46XbO.js";import"./RechartsWrapper-CRkniHVj.js";import"./index-Cw6ekdu2.js";import"./CartesianChart-poiqq0Wp.js";import"./chartDataContext-CN9Cvh4X.js";import"./CategoricalChart-CBxLoiN8.js";import"./ReactUtils-B8wQ0lPM.js";import"./ActivePoints-BQliTLi8.js";import"./Dot-CmLP1K6L.js";import"./RegisterGraphicalItemId-Cy7sjBKU.js";import"./ErrorBarContext-BWKSo9NZ.js";import"./GraphicalItemClipPath-Ca8NlFcX.js";import"./SetGraphicalItem-mQIOZYtb.js";import"./useAnimationId-Bm5L9VBy.js";import"./getRadiusAndStrokeWidthFromDot-Dzez4mct.js";import"./ActiveShapeUtils-BGxztl8t.js";import"./isPlainObject-D9nlrq_x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cFF1lzvY.js";import"./Trapezoid-CWsYalEn.js";import"./Sector-CP3wITBk.js";import"./Symbols-D_1r08sf.js";import"./symbol-pZVEj6PC.js";import"./step-DPzB36jn.js";import"./Curve-Bg7OAFiB.js";import"./index-BwszIH2h.js";import"./ChartSizeDimensions-CZzZunh8.js";import"./OffsetShower-CS-dGikj.js";import"./PlotAreaShower-Ch9v7dMV.js";import"./useElementOffset-FCvPp8XD.js";import"./uniqBy-Cr1l51kb.js";import"./iteratee-BZcK010Q.js";import"./Cross-DkzHhjx5.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
