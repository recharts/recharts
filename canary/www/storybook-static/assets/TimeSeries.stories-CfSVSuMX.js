import{R as e}from"./iframe-Cimk_otj.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ByDDt0Jf.js";import{R as h}from"./zIndexSlice-CzTLX9Ul.js";import{C as g}from"./ComposedChart-Dtd08tsU.js";import{L as x}from"./Line-CRuVEpLB.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BqwCILGz.js";import{T as V}from"./Tooltip-iHYM4Kfb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-GRhBxYn8.js";import"./Layer-CCEBq6CR.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./Label-DQCQB4o-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKEQN7E1.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./types-BP4gFlyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./throttle-QmRScbE8.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./axisSelectors-BjpwO9gg.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./Curve-VqOwF4YW.js";import"./step-CBLStXIf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tyjZKRCa.js";import"./useAnimationId-CWH9KLrM.js";import"./ActivePoints-DtOrXveG.js";import"./Dot-DcWN47E-.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./ErrorBarContext-BNzrl5kL.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./graphicalItemIdentity-dpRLTV2V.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";import"./Cross-DMlRKkj6.js";import"./Rectangle-CgoJ-bg6.js";import"./util-Dxo8gN5i.js";import"./Sector-BivCzjVW.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
