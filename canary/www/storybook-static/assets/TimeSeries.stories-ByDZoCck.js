import{R as e}from"./iframe-DIhQo_8Y.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BpVdYfJg.js";import{R as h}from"./zIndexSlice-CGgr09GZ.js";import{C as g}from"./ComposedChart-CJrQmGqR.js";import{L as x}from"./Line-DEkyIRox.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DTMlXSKJ.js";import{T as V}from"./Tooltip-CLrqdAE8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-4De8rCJ6.js";import"./Layer-BQPvkkvd.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./Text-5eA_PDhZ.js";import"./DOMUtils-Cs86oaAG.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./Label-CVkJGixO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8ZTodeV.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./types-ZiiagxD1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./throttle-B5VRQcq4.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DRimQmLV.js";import"./index-BC5_sjA-.js";import"./index-RbONCBjN.js";import"./axisSelectors-Gg8H4O2J.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./Curve-BXnwyB8Q.js";import"./step-kN_jTjZP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DEBP1yTo.js";import"./useAnimationId-CRkvHyGK.js";import"./ActivePoints-CJTgILF2.js";import"./Dot-BiDh7UAw.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./ErrorBarContext-RhNJ5kjd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./getRadiusAndStrokeWidthFromDot-DPHCRHA9.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CD90jGAB.js";import"./uniqBy-DEkqq9OP.js";import"./iteratee-C_S5i7R9.js";import"./Cross-DMyoXCGS.js";import"./Rectangle-brCqUJwM.js";import"./util-Dxo8gN5i.js";import"./Sector-CFcXtW_P.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
