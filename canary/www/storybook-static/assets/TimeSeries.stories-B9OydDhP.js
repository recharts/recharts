import{R as e}from"./iframe-qT01O9Sv.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DvY9B2Zg.js";import{R as h}from"./zIndexSlice-CQsHAgGp.js";import{C as g}from"./ComposedChart-Cdt083mL.js";import{L as x}from"./Line-C5MJ3vW-.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DNrxalK8.js";import{T as V}from"./Tooltip-AiEYy-5l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CbAqj6_Z.js";import"./Layer-CgXLDOPB.js";import"./resolveDefaultProps-CLCbJ4OP.js";import"./Text-DKzR6dpy.js";import"./DOMUtils-fvdo4GSp.js";import"./isWellBehavedNumber-D5wQM5xZ.js";import"./useId-CyAqziAf.js";import"./useBackwardsCompatibleTheme-BN2NPKue.js";import"./Label-dJvVWn2Q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8adGQSs.js";import"./index-CMK8nXr3.js";import"./index-CZve0KBd.js";import"./types-B4toHZjd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CJBkl3kj.js";import"./throttle-D76jGjFc.js";import"./index-Be2AoQLY.js";import"./index-DrjB0Jj4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-5WR8ig5Z.js";import"./axisSelectors-Ciilyz6p.js";import"./index-ej6C5682.js";import"./CartesianChart-WF9by-pK.js";import"./chartDataContext-Bb09oFLY.js";import"./CategoricalChart-DQ-LhVLQ.js";import"./Curve-C2aosV7t.js";import"./step-C8r8uJ0U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ByVfA06q.js";import"./useAnimationId-CmZNawFJ.js";import"./ActivePoints-6Ngyl1w3.js";import"./Dot-5BUC2hEg.js";import"./RegisterGraphicalItemId-CjZ2fJX7.js";import"./ErrorBarContext-E3DYF7br.js";import"./GraphicalItemClipPath-FAcvdPD9.js";import"./SetGraphicalItem-BfkU9VdL.js";import"./getRadiusAndStrokeWidthFromDot-avuw4vHy.js";import"./ActiveShapeUtils-BBHh2Hrz.js";import"./useGraphicalItemIdentity-CvGdzJl8.js";import"./useElementOffset-Di4iwNJj.js";import"./uniqBy-MLt6bSD7.js";import"./iteratee-B9dZ7gAN.js";import"./Cross-DHwJpB0V.js";import"./Rectangle-B3I4xX44.js";import"./util-Dxo8gN5i.js";import"./Sector-CKf4KwL_.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
