import{R as e}from"./iframe-vOLnYXOZ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DZdEV9rv.js";import{R as h}from"./zIndexSlice-Mv0cm5Fz.js";import{C as g}from"./ComposedChart-CHIk5yi2.js";import{L as x}from"./Line-Ii7UCjUa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CXVWvw2_.js";import{T as V}from"./Tooltip-Bb3rvUwP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B04tnKne.js";import"./Layer-BzdlA6Ig.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./Label-D2t7QHPj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaGlu0J6.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./types-DL_lANQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-zOvani6W.js";import"./throttle-H6UrPiO3.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./axisSelectors-9pB8uUjg.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./Curve-DpB1TURa.js";import"./step-DBkijEka.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-M5yh8SZt.js";import"./useAnimationId-J9bbR3c6.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./ErrorBarContext-CYCJv9Vs.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./useElementOffset-BxXr0q4n.js";import"./uniqBy-B-zSRekl.js";import"./iteratee-BhNLOt-G.js";import"./Cross-_eiJhukN.js";import"./Rectangle-DGmUUWeF.js";import"./util-Dxo8gN5i.js";import"./Sector-aoDqeOQX.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
