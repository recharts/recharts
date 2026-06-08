import{R as e}from"./iframe-B2GUem4R.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CFUeYXnK.js";import{R as h}from"./zIndexSlice-CZi7E6fW.js";import{C as g}from"./ComposedChart-C0b-ufbL.js";import{L as x}from"./Line-p1FLjwlJ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BTfuin0j.js";import{T as V}from"./Tooltip-AZ9IybMD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dz6Q_sAk.js";import"./CartesianAxis-DVMfjDIU.js";import"./Layer-D33k1icw.js";import"./resolveDefaultProps-D8aANFv1.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./isWellBehavedNumber-Dny2ojXK.js";import"./Label-BkYexeGT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./types-D4D5wSub.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./immer-DXmH-xiw.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./axisSelectors-eBcYGUc1.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./Curve-TtTpS3RF.js";import"./step-1OtCv9Fq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LimEMMjo.js";import"./useAnimationId-D653EGzA.js";import"./string-B6fdYHAA.js";import"./ActivePoints-CSw05vyh.js";import"./Dot-t6KHQrBE.js";import"./RegisterGraphicalItemId-CH4DvZUM.js";import"./ErrorBarContext-CorbPQDF.js";import"./GraphicalItemClipPath-CAM-mwtd.js";import"./SetGraphicalItem-C_-j0gLb.js";import"./getRadiusAndStrokeWidthFromDot-By4awG1w.js";import"./ActiveShapeUtils-1-wftwDY.js";import"./useElementOffset-qp1GxR-0.js";import"./uniqBy-DhTftgCy.js";import"./iteratee-N9KERHhC.js";import"./Cross-DMq7is0n.js";import"./Rectangle-CNlPjGbB.js";import"./Sector-DDwopboB.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
