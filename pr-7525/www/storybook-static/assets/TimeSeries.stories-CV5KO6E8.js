import{R as e}from"./iframe-mx_m0Bbx.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-e2aIYDeC.js";import{R as h}from"./zIndexSlice-DzRj0O2j.js";import{C as g}from"./ComposedChart-BENGvYsD.js";import{L as x}from"./Line-BegSPRqU.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dkhn0JVn.js";import{T as V}from"./Tooltip-BgyVG5YZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-uqQC2EBI.js";import"./Layer-CIGRgmJf.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./Label-CTtz2nFH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoWBLOas.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./types-CGXKV1tr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./throttle-C4NetDSi.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./axisSelectors-BCNbmsqC.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./Curve-8KyVkyQb.js";import"./step-DzD8K2Hy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CxqbLrvD.js";import"./useAnimationId-B1RQqc1z.js";import"./ActivePoints-p8w8Ckwa.js";import"./Dot-CG3pFr9Q.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./ErrorBarContext-DRhFO-yz.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getRadiusAndStrokeWidthFromDot-e5MUZgSd.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./useElementOffset-B1ENHzAZ.js";import"./uniqBy-CP0rnImt.js";import"./iteratee-Cu1e9zHo.js";import"./Cross-TN21c1kX.js";import"./Rectangle-KZcqepmk.js";import"./util-Dxo8gN5i.js";import"./Sector-D6oqAW5N.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
