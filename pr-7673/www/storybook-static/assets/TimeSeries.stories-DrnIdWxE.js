import{R as e}from"./iframe-CH2RirRG.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CqEbzlS_.js";import{R as h}from"./zIndexSlice-EPNgUqra.js";import{C as g}from"./ComposedChart-B-gNv-fY.js";import{L as x}from"./Line-C8M3PSSl.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-_MlV87vT.js";import{T as V}from"./Tooltip-CcghgAVV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Bp_3tslY.js";import"./Layer-DUd8J6bA.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./Text-D0Ni_nG3.js";import"./DOMUtils-CjXikq8H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./Label-JTJpVxOG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaLmvsT2.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./types-BWjPFUtA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-p29IB_-G.js";import"./throttle-wiaHzbqm.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./index-DCEj_OWD.js";import"./axisSelectors-CkKizBw1.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./CategoricalChart-DISzDu-A.js";import"./Curve-BsDu1IjD.js";import"./step-C8By5YWW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CsoBD4nr.js";import"./useAnimationId-vcXUsSrn.js";import"./ActivePoints-Dg4SvqYZ.js";import"./Dot-DUdZMRdV.js";import"./RegisterGraphicalItemId-CdD2mOwf.js";import"./ErrorBarContext-CEgFqn-G.js";import"./GraphicalItemClipPath-D4fexUqU.js";import"./SetGraphicalItem-CVh4pOat.js";import"./getRadiusAndStrokeWidthFromDot-BtjAJPPD.js";import"./ActiveShapeUtils-CWoQL3Mu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BZbIepG_.js";import"./uniqBy-B9R5xbVR.js";import"./iteratee-DTZfeRvH.js";import"./Cross-ByWn_LqU.js";import"./Rectangle-Ddm54g-k.js";import"./util-Dxo8gN5i.js";import"./Sector-CqAtFCy-.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
