import{R as e}from"./iframe-Bd2Bk_ai.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CypmBaco.js";import{R as h}from"./zIndexSlice-CvsBboU2.js";import{C as g}from"./ComposedChart-C6UPQc6u.js";import{L as x}from"./Line-BYwtVnuU.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DCtwXSpz.js";import{T as V}from"./Tooltip-DFK7qGgh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DlgdGNPk.js";import"./Layer-Db-kRrip.js";import"./resolveDefaultProps-BB0elGzE.js";import"./Text-oE3Ppk29.js";import"./pageBackground-S_W44ttK.js";import"./isWellBehavedNumber-DBLq0YlU.js";import"./useId-CHbendDP.js";import"./useBackwardsCompatibleTheme-C0u865U4.js";import"./Label-O_u7VAtA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQoX8EpG.js";import"./index-YOlWJ3UI.js";import"./index-BgWJcO-O.js";import"./types-BTpVoC26.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cpd-xLFY.js";import"./throttle-BgaPtkTt.js";import"./index-DJuU84IJ.js";import"./index-nQQMczPK.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-hjszmlUK.js";import"./RechartsWrapper-DzNno5mi.js";import"./index-Qipw3yHd.js";import"./CartesianChart-CrlTsjwB.js";import"./chartDataContext-BPm9-wzB.js";import"./CategoricalChart-CcrqLwDF.js";import"./Curve-5l5JQbBY.js";import"./step-BGDWO4Dz.js";import"./path-DyVhHtw_.js";import"./activeStyles-C6x8xDfA.js";import"./useAnimationId-Cm1DhMix.js";import"./dataEntryStyles-BtdfRJJQ.js";import"./ActivePoints-kKexF7Xi.js";import"./Dot-DaQEzLOP.js";import"./ErrorBarContext-RrbFFwNs.js";import"./GraphicalItemClipPath-Dc7-6XW3.js";import"./SetGraphicalItem-Br5gILYL.js";import"./getRadiusAndStrokeWidthFromDot-D0dtyr_V.js";import"./ActiveShapeUtils-Dy2jST-f.js";import"./useEffectiveDataKey-_q65TZZ4.js";import"./useElementOffset-DD2zEOuZ.js";import"./uniqBy-DSxR1_ki.js";import"./iteratee-DmMpoBDe.js";import"./Cross-l8PQsr7L.js";import"./Rectangle-ChYeKnX_.js";import"./util-Dxo8gN5i.js";import"./Sector-C7HxJjMo.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
