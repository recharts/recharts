import{R as e}from"./iframe-CTZq4wow.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DLDzw0JX.js";import{R as h}from"./zIndexSlice-BugLLn2I.js";import{C as g}from"./ComposedChart-B7gp54eM.js";import{L as x}from"./Line-BSq-1OIA.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-oRxS8xLw.js";import{T as V}from"./Tooltip-DfvCrZ11.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Fbl6c-dp.js";import"./Layer-B0eWkEir.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./Label-BA3Mm5Cp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-JO4x2o2R.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./types-Cmo79yaU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./throttle-CyDwbdt-.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./index-C9WAMmaw.js";import"./axisSelectors-CvXoECki.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./Curve-B2-DT88v.js";import"./step-BOqrsqeu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TPOIkuad.js";import"./useAnimationId-N1bAbizC.js";import"./ActivePoints-DduaoRit.js";import"./Dot-Ck1gikCj.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./ErrorBarContext-4wXqzGb4.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getRadiusAndStrokeWidthFromDot-DY4tcjGE.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./useElementOffset-CKa6iluZ.js";import"./uniqBy-CatM64vN.js";import"./iteratee-BUImv9wm.js";import"./Cross-Bea8cF3l.js";import"./Rectangle-Zzn1I1q3.js";import"./util-Dxo8gN5i.js";import"./Sector-CkMR5IsZ.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
