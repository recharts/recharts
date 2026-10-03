import{R as e}from"./iframe-SCBQwNxQ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cc0l9D0i.js";import{R as h}from"./zIndexSlice-j2Iu_2in.js";import{C as g}from"./ComposedChart-DL5-9kqo.js";import{L as x}from"./Line-Ioxo2vHg.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-G26x6J9Q.js";import{T as V}from"./Tooltip-B9AMlJlO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cxx7AUTO.js";import"./Layer-Cqwrwd-u.js";import"./resolveDefaultProps-CyZ9SZnI.js";import"./Text-CXiXfLVx.js";import"./DOMUtils-htjTn9rf.js";import"./isWellBehavedNumber-DvdKXsqM.js";import"./useId-GXBIOTNS.js";import"./useBackwardsCompatibleTheme-BnvgZvcH.js";import"./Label-5iI9wFuI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D6bO2lss.js";import"./index-DsLPnsoz.js";import"./index-Co8Np-XD.js";import"./types-tzKuPEFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJfakFhE.js";import"./throttle-CzCySKF_.js";import"./index-B6uIZp6g.js";import"./index-B0bY_C-Z.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BlKrxgAY.js";import"./axisSelectors-DLhQ9sAD.js";import"./index-CE5ovKc5.js";import"./CartesianChart-CfXQSmt5.js";import"./chartDataContext-1NVWGtYz.js";import"./CategoricalChart-Byg7V9pR.js";import"./Curve-DfnFB90y.js";import"./step-x-If1Moz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Wlp1qaKk.js";import"./useAnimationId-DXE0JH3K.js";import"./ActivePoints-DzK6hILC.js";import"./Dot-BvkLNrn9.js";import"./RegisterGraphicalItemId-ArfZLync.js";import"./ErrorBarContext-SniQgvjJ.js";import"./GraphicalItemClipPath-DklClpWQ.js";import"./SetGraphicalItem-CM8VxQRS.js";import"./getRadiusAndStrokeWidthFromDot-BJxhJQao.js";import"./ActiveShapeUtils-HcSLNl9S.js";import"./useGraphicalItemIdentity-D5Od3f0u.js";import"./useElementOffset-B4lloxY7.js";import"./uniqBy-DusnyNSE.js";import"./iteratee-C3MB5p7e.js";import"./Cross-C3dnBeYr.js";import"./Rectangle-7gtnQWmz.js";import"./util-Dxo8gN5i.js";import"./Sector-Di2yrsjN.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
