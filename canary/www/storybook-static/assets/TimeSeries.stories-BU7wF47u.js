import{R as e}from"./iframe-C98xM-14.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CsWwdt7Q.js";import{R as h}from"./zIndexSlice-PFqQVngT.js";import{C as g}from"./ComposedChart-DEvNrsRG.js";import{L as x}from"./Line-vvPtX59c.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BIaFt0TH.js";import{T as V}from"./Tooltip-CcjpX53J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BhBvKKe-.js";import"./Layer-DV2USN9H.js";import"./resolveDefaultProps-BpgNO45K.js";import"./Text-CdsOrPG8.js";import"./DOMUtils-Cyba50bX.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./Label-6WZ-bs73.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_jlJOhPE.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./types-C3nHa31Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BVBdj9en.js";import"./throttle-Cpn-KPW0.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DNpWLRvv.js";import"./axisSelectors-DE9vQUUE.js";import"./index-Bwd0n8ve.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./Curve-C4kxUnUy.js";import"./step-CKRTH0G6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CTflnzuI.js";import"./useAnimationId-B6O86EG4.js";import"./ActivePoints-Bm8Ngiah.js";import"./Dot-BVHRbG7p.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getRadiusAndStrokeWidthFromDot-BCR9SUwJ.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BwcDYxj_.js";import"./uniqBy-KZWDygXq.js";import"./iteratee-CBQ5EdUG.js";import"./Cross-CmEoGz0N.js";import"./Rectangle-EqmP3HLD.js";import"./util-Dxo8gN5i.js";import"./Sector-BcT2aBee.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
