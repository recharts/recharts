import{R as e}from"./iframe-DNnhIzqd.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DyyKFn3c.js";import{R as h}from"./zIndexSlice-CZnRUfU-.js";import{C as g}from"./ComposedChart-Dwrm7GV8.js";import{L as x}from"./Line-Bslt7b3k.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-DjL9qVWl.js";import{T as V}from"./Tooltip-Dhrf56F8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./CartesianAxis-DyWgnQe6.js";import"./Layer-BC8osa1v.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./Label-zRO_Glrc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D96CZuW6.js";import"./throttle-QyoUWs98.js";import"./types-BRWBXBDp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D3RI42dK.js";import"./RechartsWrapper-CrR43_nu.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Curve-BuuEl7Oa.js";import"./step-CcvBplbA.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BLzS4I_n.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./activeStyles-C2NC3gaF.js";import"./useAnimationId-nuwJNMaM.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./ErrorBarContext-BEOQHAHp.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./useElementOffset-BaFq-POl.js";import"./uniqBy-_gekbtiv.js";import"./iteratee-6f6iZKQ8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Q3vpjsWn.js";import"./Rectangle-BldvyN6i.js";import"./util-Dxo8gN5i.js";import"./Sector-DVFeULU9.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
