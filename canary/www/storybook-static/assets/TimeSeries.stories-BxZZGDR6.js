import{R as e}from"./iframe-CRyknHcV.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CQvMjduc.js";import{R as h}from"./zIndexSlice-D94J06pN.js";import{C as g}from"./ComposedChart-DHhrqJQt.js";import{L as x}from"./Line-BKwpqhNN.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BQSgkEBA.js";import{T as V}from"./Tooltip-DJwNP3Cy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Czm-DLiC.js";import"./Layer-tFywX8jB.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./Text-AosieIGC.js";import"./DOMUtils-DDmVxA4T.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./Label-Bb81vEf3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CO71XxiU.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./types-CgTXGcnU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./throttle-CdnYcrez.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./axisSelectors-HI2cMDW5.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./Curve-Cx7OO1Tc.js";import"./step-CoZJp4zn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuJcIC8o.js";import"./useAnimationId-B3genVAW.js";import"./ActivePoints-DQSPDrQl.js";import"./Dot-Cg5Ch71G.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getRadiusAndStrokeWidthFromDot-CPUyhS2F.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";import"./Cross-dQK9qAfq.js";import"./Rectangle-C7u2937O.js";import"./util-Dxo8gN5i.js";import"./Sector-2l4dxI6m.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};
