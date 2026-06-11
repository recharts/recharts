import{R as e}from"./iframe-DBxFP3uX.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CQTPr47R.js";import{R as h}from"./zIndexSlice-B_9s4KsU.js";import{C as g}from"./ComposedChart-CWD6KhhR.js";import{L as x}from"./Line-_qToq4r1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B06022wF.js";import{T as V}from"./Tooltip-CV5R1W18.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CN0u3twK.js";import"./CartesianAxis-tZocWrkt.js";import"./Layer-Buso2Ccs.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./Label-Dhv9vMg4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBGeCZYh.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./types-B2FPYU3d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BowbWmvp.js";import"./throttle-DjG9xqx-.js";import"./RechartsWrapper-DEp3al8N.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./axisSelectors-B_9j14vR.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./Curve-Dh6mi4Et.js";import"./step-CqGdUrTJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ooNl266t.js";import"./useAnimationId-54G3nUfQ.js";import"./string-B6fdYHAA.js";import"./ActivePoints-hNSOrLBT.js";import"./Dot-g-iDk6Aa.js";import"./RegisterGraphicalItemId-BzdV07RL.js";import"./ErrorBarContext-D7bc2l2n.js";import"./GraphicalItemClipPath-CDU2cR1P.js";import"./SetGraphicalItem-DoJqlCoL.js";import"./getRadiusAndStrokeWidthFromDot-CAXSoZ4P.js";import"./ActiveShapeUtils-Bhf79Nyo.js";import"./useElementOffset-BIQStkwP.js";import"./uniqBy-CdkgCulQ.js";import"./iteratee-BRF5lQre.js";import"./Cross-CaNg85QT.js";import"./Rectangle-BPEfWSXH.js";import"./Sector-BFzsvVXV.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
