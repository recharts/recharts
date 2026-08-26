import{R as e}from"./iframe-DJ6rtu5y.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BUVKQY8c.js";import{R as h}from"./zIndexSlice-GKDeUFOJ.js";import{C as g}from"./ComposedChart-DTZGrJFy.js";import{L as x}from"./Line-BvFD854y.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D71QV_XP.js";import{T as V}from"./Tooltip-DeCkZOsW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BUpdfbmz.js";import"./Layer-cCkIU0Vd.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./isWellBehavedNumber-B2OjYN3n.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./Label-6LwczIk6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IvPQYMIA.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./types-CF6XO-qy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-omd44aKK.js";import"./throttle-sudvDT5X.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CGKs6O5B.js";import"./axisSelectors-C35c3TE0.js";import"./index-Bxq5EtVn.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./Curve-D-GktZhk.js";import"./step-HdY_lyE3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-H08MVe4l.js";import"./useAnimationId-BjJyuwQe.js";import"./ActivePoints-CyJpEWEh.js";import"./Dot-ClYl_u4u.js";import"./RegisterGraphicalItemId-BsIALwJ-.js";import"./ErrorBarContext-DT0TIJoX.js";import"./GraphicalItemClipPath-B5qfpalh.js";import"./SetGraphicalItem-DbBJcchq.js";import"./getRadiusAndStrokeWidthFromDot-_43mG9af.js";import"./ActiveShapeUtils-CPDo8aA6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Cds_5qGL.js";import"./uniqBy-Dj6LJcG4.js";import"./iteratee-cRYzUJKO.js";import"./Cross-B9YfSfyQ.js";import"./Rectangle-CTp7N4-J.js";import"./util-Dxo8gN5i.js";import"./Sector-CWWOBvax.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
