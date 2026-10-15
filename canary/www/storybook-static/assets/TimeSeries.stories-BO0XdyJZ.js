import{R as e}from"./iframe-CjAZXmgk.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-XXYcX2bn.js";import{R as h}from"./zIndexSlice-DZ6wU0kL.js";import{C as g}from"./ComposedChart-C9HbEoPU.js";import{L as x}from"./Line-Bqm35VQZ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cdy5oRLL.js";import{T as V}from"./Tooltip-BMETZi0y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CNPqH8LV.js";import"./Layer-CMYvDThQ.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./Label-DnpXC07H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-maUeBX7p.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./throttle-aHpS-uJF.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-DVMe8D3h.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./index-jRxYEVM9.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./Curve-BAdd7Cc7.js";import"./step-DNHn4BEu.js";import"./path-DyVhHtw_.js";import"./activeStyles-BjWwonc4.js";import"./useAnimationId-BxmhNVS4.js";import"./dataEntryStyles-BHBmvArk.js";import"./ActivePoints-C5jmgdLT.js";import"./Dot-C4dqO9Kj.js";import"./ErrorBarContext-CzSreuRh.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./getRadiusAndStrokeWidthFromDot-B3WoL_Uu.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./useEffectiveDataKey-NmC8up5p.js";import"./useElementOffset-B7ar2O_j.js";import"./uniqBy-DzMYEmyq.js";import"./iteratee-BZjhhQST.js";import"./Cross-Mi64MTa2.js";import"./Rectangle-Cg0Vumjf.js";import"./util-Dxo8gN5i.js";import"./Sector-P4GUkmMC.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
