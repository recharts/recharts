import{R as e}from"./iframe-DloB-Tup.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-85tJ7DjB.js";import{R as h}from"./zIndexSlice-DkoSoypq.js";import{C as g}from"./ComposedChart-gu5T_l93.js";import{L as x}from"./Line-BakhYVyl.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cp_uhw02.js";import{T as V}from"./Tooltip-CVyBTsCT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-3ybsRmFq.js";import"./Layer-S6G7_nQD.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./Label-BCZcSJT3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./throttle-DHxiFtgA.js";import"./dataEntryStyles-DO0_QeZe.js";import"./types-BVm9IbXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-5JufQAoG.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./Curve-Dw8-x6-u.js";import"./step-CNEatR3g.js";import"./path-DyVhHtw_.js";import"./LabelList-B_3Vas12.js";import"./ActivePoints-Baun6K6R.js";import"./Dot-CiBIq_Wk.js";import"./activeStyles-B8TQJkxp.js";import"./useAnimationId-B4JCM27x.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./getRadiusAndStrokeWidthFromDot-ymvOuKSP.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./useEffectiveDataKey-B7m-hO1Q.js";import"./useElementOffset-fPA8IkJo.js";import"./uniqBy-C9ysuPBd.js";import"./iteratee-C2C5pJva.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dqr7MU5J.js";import"./Rectangle-DT8WiWUe.js";import"./util-Dxo8gN5i.js";import"./Sector-CMUhvR-T.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
