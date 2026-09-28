import{R as e}from"./iframe-DfzMHjuD.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CcmvQ4-M.js";import{R as h}from"./zIndexSlice-D65nx7n2.js";import{C as g}from"./ComposedChart-BZJdnfJq.js";import{L as x}from"./Line-CXIUk8YQ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DkoGb7PH.js";import{T as V}from"./Tooltip-C55DSjup.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-B2_CRuSv.js";import"./Layer-BgMBl2n9.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./Text-KIvPk-oI.js";import"./DOMUtils-DZvMhBn7.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./Label-DHYmqyDD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjEP4vsT.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./types-BoXpTlVd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./throttle-B4jaia1x.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Btc41qHc.js";import"./axisSelectors-Dv8-JHab.js";import"./index-D-FQmlHp.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./Curve-BLtOpFAf.js";import"./step-9PcWzaJ_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8ukjbdC.js";import"./useAnimationId-BwLSFp-D.js";import"./ActivePoints-CQoPkIu-.js";import"./Dot-CVblHFHD.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getRadiusAndStrokeWidthFromDot-BDWnIHrh.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./useElementOffset-WbfHTGT4.js";import"./uniqBy-BbVKU46e.js";import"./iteratee-Biw9ni9t.js";import"./Cross-DIR6xrIW.js";import"./Rectangle-D_LZlwBF.js";import"./util-Dxo8gN5i.js";import"./Sector-D806wobg.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
