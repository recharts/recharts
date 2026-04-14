import{e}from"./iframe-BSb16JoR.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BHgcURqr.js";import{R as y}from"./arrayEqualityCheck-CKi6Epe4.js";import{C as g}from"./ComposedChart-BAoNDz5r.js";import{L as x}from"./Line-CA2pMRZZ.js";import{R as S}from"./RechartsHookInspector-DGV6Ct7j.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BCQZ4ydZ.js";import{T as V}from"./Tooltip-DORXG9Ys.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DMpwxzt3.js";import"./Layer-DZYtcC2w.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./Label-tcp5Z6P8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8dStJwlU.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./immer-BeuBwnCt.js";import"./types-BvVKlSL_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./ReactUtils-v-8YVmpF.js";import"./ActivePoints-CXu9VOq4.js";import"./Dot-CVpd23iI.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./ErrorBarContext-D0q4JY8z.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./useAnimationId-BRGMijHA.js";import"./getRadiusAndStrokeWidthFromDot-CY2Vn6BR.js";import"./ActiveShapeUtils-CQZggNZ2.js";import"./isPlainObject-BiZ1xmFL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6I9faxi.js";import"./Trapezoid-BRhFJlA0.js";import"./Sector-C6wRPjnp.js";import"./Symbols-SIMNkJGH.js";import"./symbol-CgA8__kL.js";import"./step-g_dGXwfI.js";import"./Curve-CJKywfJT.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";import"./useElementOffset-CAWkhzoo.js";import"./uniqBy-KIGisAvA.js";import"./iteratee-DKK5omGB.js";import"./Cross-BnybQRNa.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
