import{R as e}from"./iframe-tfZrcrMF.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DhOgSkqh.js";import{R as h}from"./zIndexSlice-CC8kCstT.js";import{C as g}from"./ComposedChart-BCjiIJ4o.js";import{L as x}from"./Line-D0Cby_f_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-uLY3we2s.js";import{T as V}from"./Tooltip-DiMmQvx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DHW_9iiH.js";import"./Layer-ru88AdSr.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./Text-DXjy-RzD.js";import"./ZIndexLayer-DnL-EDkP.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./Label-CrLdB5k3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./throttle-DycvlznN.js";import"./types-CWW0D7cm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BkiuLlPZ.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Curve-C3wk6TDN.js";import"./step-8uwKBSGh.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CpzODNOV.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./activeStyles-CW3oynl8.js";import"./useAnimationId-CiRiV3_R.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./ErrorBarContext-5NXkIyss.js";import"./SetGraphicalItem-BPWS4To0.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./useEffectiveDataKey-Bate5zYb.js";import"./useElementOffset-BOZs20Ry.js";import"./uniqBy-q1lloGjW.js";import"./iteratee-CDaF10ns.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BFqcDJ2_.js";import"./Rectangle-C_wD8Q_z.js";import"./util-Dxo8gN5i.js";import"./Sector-DobEZmfG.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
