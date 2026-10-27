import{R as e}from"./iframe-BKOly897.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CAN01VgH.js";import{R as h}from"./zIndexSlice-MuW0IoWE.js";import{C as g}from"./ComposedChart-DNIn-1lF.js";import{L as x}from"./Line-D5arw7he.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-FWOlMe5i.js";import{T as V}from"./Tooltip-DlABXhjR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./Text-B-p-4nXu.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./Label-BqeeWfBr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./throttle-Dj0bMbq4.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DAovfJtb.js";import"./RechartsWrapper-BR-O-n81.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./Curve-DZlxAOiJ.js";import"./step-D0Rpy-Hs.js";import"./path-DyVhHtw_.js";import"./LabelList-CHIFisD0.js";import"./ActivePoints-mk-rZ28o.js";import"./Dot-fiFJQDUC.js";import"./activeStyles-C5fI4Bwm.js";import"./useAnimationId-Dwkyu_pp.js";import"./Symbols-owfjK1Cg.js";import"./symbol-BffQEpZj.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./ErrorBarContext-CQ65MipX.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getRadiusAndStrokeWidthFromDot-B-_khl6D.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./useEffectiveDataKey-BLEvHhBq.js";import"./useElementOffset-D4wk1lFS.js";import"./uniqBy-QsHY--3m.js";import"./iteratee-C_CFKuDs.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C7tEJC1H.js";import"./Rectangle-dSQZJlx4.js";import"./util-Dxo8gN5i.js";import"./Sector-sosRkgZY.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
