import{c as e}from"./iframe-CFdw7OF0.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-oGl6YnV0.js";import{g as y}from"./zIndexSlice-D5FBk225.js";import{C as g}from"./ComposedChart-Z--IS1CR.js";import{L as x}from"./Line-cOG-eLoA.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-B-4cH8vj.js";import{T as V}from"./Tooltip-LgSYFZHU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-i3QN0OCy.js";import"./CartesianAxis-DvetSxxI.js";import"./Layer-DVYMAObc.js";import"./resolveDefaultProps-T_Ifm--9.js";import"./Text-Cow_E4O9.js";import"./DOMUtils-BavBrzJ4.js";import"./isWellBehavedNumber-Bx2m4Paj.js";import"./Label-2Qw5xNff.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-K1WjLJ6s.js";import"./index-CM5vwHXM.js";import"./index-RIEQ7tnC.js";import"./types-DRUeCAti.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvMrYJlr.js";import"./immer-3q52nOMc.js";import"./RechartsWrapper-pofiw2Fq.js";import"./index-DM95XG_1.js";import"./index-C5nAfqWm.js";import"./axisSelectors-CDxqGeGZ.js";import"./CartesianChart-DSPLLrgp.js";import"./chartDataContext-zA7-YeX3.js";import"./CategoricalChart-AW1pE9Yw.js";import"./Curve-CMXh5glG.js";import"./step-Crajo5M3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CaBU1i2i.js";import"./ActivePoints-BRiCC5vc.js";import"./Dot-BIcdqveY.js";import"./RegisterGraphicalItemId-BaAIN_Bd.js";import"./ErrorBarContext-B3ComckR.js";import"./GraphicalItemClipPath-DcU2KTuM.js";import"./SetGraphicalItem-D0G49xVf.js";import"./useAnimationId-opl2QVve.js";import"./getRadiusAndStrokeWidthFromDot-DulN0eDG.js";import"./ActiveShapeUtils-CucidJwG.js";import"./useElementOffset-C84_aF81.js";import"./uniqBy-Chp8xrv6.js";import"./iteratee-D26QWFLa.js";import"./Cross-DeOAH8tZ.js";import"./Rectangle-Od57b66I.js";import"./Sector-CIx1PkfB.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
