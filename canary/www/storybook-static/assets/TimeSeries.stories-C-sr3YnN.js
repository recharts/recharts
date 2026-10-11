import{R as e}from"./iframe-3bLAQ3jn.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CHp4l0kA.js";import{R as h}from"./zIndexSlice-MjxnTwUQ.js";import{C as g}from"./ComposedChart-DG0emu8-.js";import{L as x}from"./Line-BCzFaGb7.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CEKTBlSM.js";import{T as V}from"./Tooltip-hbzu9PhB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-aAySesk6.js";import"./Layer-BIgar30Y.js";import"./resolveDefaultProps-aDW5W-_U.js";import"./Text-DqxBCtXi.js";import"./pageBackground-2DSYbj3P.js";import"./isWellBehavedNumber-BX_nblg7.js";import"./useId-BfAkDmBs.js";import"./useBackwardsCompatibleTheme-CCnkHGsk.js";import"./Label-Dn58gwL2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DiKAWbLw.js";import"./index-awsJe2Eb.js";import"./index-xiU2DbNU.js";import"./types-DN7oIxRd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C8ZppDJj.js";import"./throttle-BuQ3fxbC.js";import"./index-DCRVqNzU.js";import"./index-3A7c9_Pr.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-7ESk0vAy.js";import"./axisSelectors-qjgTgHdP.js";import"./index-6Ojv9TCM.js";import"./CartesianChart-C-eExA3r.js";import"./chartDataContext-DAaLengz.js";import"./CategoricalChart-DMmsyMWW.js";import"./Curve-CuK08rWF.js";import"./step-ATMA922b.js";import"./path-DyVhHtw_.js";import"./activeStyles-CAdLKBhw.js";import"./useAnimationId-Bz90LZyV.js";import"./dataEntryStyles-BmtIjxjW.js";import"./ActivePoints-Cx1YGcZP.js";import"./Dot-6DZHOl7o.js";import"./ErrorBarContext-CU2IPWFH.js";import"./GraphicalItemClipPath-DfyNoqlW.js";import"./SetGraphicalItem-DodAswVv.js";import"./getRadiusAndStrokeWidthFromDot-D9mbRMV7.js";import"./ActiveShapeUtils-D6QRbruv.js";import"./useGraphicalItemIdentity-mnMFiUCN.js";import"./useElementOffset-BkucEV4P.js";import"./uniqBy-Dyl9KF0J.js";import"./iteratee-CzxOMWv0.js";import"./Cross-BDUDEZrZ.js";import"./Rectangle-G6aPnbc1.js";import"./util-Dxo8gN5i.js";import"./Sector-C9F_9tZM.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
