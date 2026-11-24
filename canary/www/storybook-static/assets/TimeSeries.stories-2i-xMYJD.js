import{R as e}from"./iframe-3nQ-xZag.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DaNCZ6NZ.js";import{R as h}from"./zIndexSlice-Dm-AMY-R.js";import{C as g}from"./ComposedChart-BTAIT8TE.js";import{L as x}from"./Line-BaS7SehX.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Nv905U8s.js";import{T as V}from"./Tooltip-DBycVl39.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./CartesianAxis-Bro405i1.js";import"./Layer-B7hf8wrq.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./Label-CjKwBg5w.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./throttle-VgoIbkK-.js";import"./types-CveBZAlv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-fNaznWMp.js";import"./RechartsWrapper-CLBNIVU_.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./getRadiusAndStrokeWidthFromDot-DqipViX9.js";import"./Curve-D3218arp.js";import"./step-nf1yL9aW.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-31cxgZsa.js";import"./ActivePoints-Ba3qB0HE.js";import"./Dot-B0shGOFT.js";import"./activeStyles-BALJdcO7.js";import"./useAnimationId-JHyqMuIo.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./ErrorBarContext-BrChGa93.js";import"./SetGraphicalItem-CcSizHOA.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./useEffectiveDataKey-DHnfGJ84.js";import"./useElementOffset-C7XMmhpG.js";import"./uniqBy-qypsR_Io.js";import"./iteratee-Oqe1JUBW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B8qZszvR.js";import"./Rectangle-BmKAL7wU.js";import"./util-Dxo8gN5i.js";import"./Sector-DMIO8Iyd.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
