import{R as e}from"./iframe-D0WJBe8B.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BEoxl3pM.js";import{R as h}from"./zIndexSlice-BC6IeYNi.js";import{C as g}from"./ComposedChart-BlH1ARqS.js";import{L as x}from"./Line-DbeSK1IG.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-50ivSU0v.js";import{T as V}from"./Tooltip-BrlnzokM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C6mWkihq.js";import"./Layer-aO3gvgqI.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./Text-CgQ4MHqj.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./Label-B4KodQcW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./throttle-TSOlYDju.js";import"./types-CgDj6Pcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D5taf4lI.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./Curve-D1Sg03qQ.js";import"./step-C85hYdLD.js";import"./path-DyVhHtw_.js";import"./LabelList-fY2HN2fJ.js";import"./ActivePoints-B12s-f_1.js";import"./Dot-B5ivztlh.js";import"./activeStyles-DLjK0T5T.js";import"./useAnimationId-C0s3vBtu.js";import"./dataEntryStyles-BPWJkcwq.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getRadiusAndStrokeWidthFromDot-D5udBmOW.js";import"./ActiveShapeUtils-Bceipj14.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./isArguments-yB-y1yaH.js";import"./Cross-boJjnotO.js";import"./Rectangle-7LooK13L.js";import"./util-Dxo8gN5i.js";import"./Sector-BxtngjTW.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
