import{R as e}from"./iframe-Cs9VT9SX.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ZXwUP9Th.js";import{R as h}from"./zIndexSlice-BdtHtScS.js";import{C as g}from"./ComposedChart-CBGO3KHX.js";import{L as x}from"./Line-Cx0NJuWb.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B33rCp3E.js";import{T as V}from"./Tooltip-DBB7x4xM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CkxFyA6u.js";import"./Layer-DyApFY3D.js";import"./resolveDefaultProps-BxA5_OWP.js";import"./Text-NwXvdk36.js";import"./pageBackground-Oh548Gvn.js";import"./isWellBehavedNumber-CVBN0S-y.js";import"./useId-pJJcLuGB.js";import"./useBackwardsCompatibleTheme-BWsBUWUZ.js";import"./Label-CtA6iQna.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6baMIq5x.js";import"./index-xMFBNBU3.js";import"./index-Ccb8EBp4.js";import"./types-BderJbki.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLNxhMWR.js";import"./throttle-DO7D3GPa.js";import"./index-Co8WVvE-.js";import"./index-Cjg5XPAC.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-gCAVib4T.js";import"./RechartsWrapper-C5YZJO9f.js";import"./index-iO7lXoIC.js";import"./CartesianChart-BoDGj9iP.js";import"./chartDataContext-neHnT-17.js";import"./CategoricalChart-D0wW8A9V.js";import"./Curve-C5hSs_Mg.js";import"./step-C0n0sZGY.js";import"./path-DyVhHtw_.js";import"./activeStyles-CIXVWOxz.js";import"./useAnimationId-1jmYsVjg.js";import"./dataEntryStyles-Bogdu71F.js";import"./ActivePoints-zHs9ig4S.js";import"./Dot-D9tJW78F.js";import"./ErrorBarContext-Ba_qpzYN.js";import"./GraphicalItemClipPath-BhbyQIog.js";import"./SetGraphicalItem-Dqm-RVU6.js";import"./getRadiusAndStrokeWidthFromDot-CqwHrRi4.js";import"./ActiveShapeUtils-DP1vY-Az.js";import"./useEffectiveDataKey-KP9u_G2c.js";import"./useElementOffset-Dsr0kKKf.js";import"./uniqBy-0hLfVEhM.js";import"./iteratee-DMBh3gc4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-h4cxnd.js";import"./Rectangle-B7LH8v7V.js";import"./util-Dxo8gN5i.js";import"./Sector-D65AispO.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
