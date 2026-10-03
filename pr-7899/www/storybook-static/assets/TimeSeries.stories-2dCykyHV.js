import{R as e}from"./iframe-Bi3q5ica.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-hhEBl8YN.js";import{R as h}from"./zIndexSlice-3OSmdeIU.js";import{C as g}from"./ComposedChart-BJ-4k_4i.js";import{L as x}from"./Line-BE5Ogd3G.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dy9_TWZx.js";import{T as V}from"./Tooltip-CGByORWU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BXx4NBAG.js";import"./Layer-CtQIi_dM.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./Text-Dc41Ok3C.js";import"./DOMUtils-Daz026gj.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./Label-BY0KH6BI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_YH5dyV.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./types-3e9Y1DlN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./throttle-CZI3Ns_R.js";import"./index-ngMl_c_9.js";import"./index-BUn-OEAP.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BIVD6JFp.js";import"./axisSelectors-BxvzYEcA.js";import"./index-BVwc-Jau.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./Curve-C2iAxlmR.js";import"./step-BPB7nuaq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C5QOwiw_.js";import"./useAnimationId-Wfo4M9rJ.js";import"./ActivePoints-DNbrAlaG.js";import"./Dot-8HK_808i.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./ErrorBarContext-Tsgmsoyf.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./getRadiusAndStrokeWidthFromDot-Co8c106b.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";import"./useElementOffset-Cv1kBb51.js";import"./uniqBy-DtuySXID.js";import"./iteratee-9Tj9By3u.js";import"./Cross-LcVvAtGO.js";import"./Rectangle-CfISYkIx.js";import"./util-Dxo8gN5i.js";import"./Sector-DSj8bG7F.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
