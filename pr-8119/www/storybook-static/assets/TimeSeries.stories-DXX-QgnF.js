import{R as e}from"./iframe-D4SWC0C9.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DY95kjca.js";import{R as h}from"./zIndexSlice-DtLu2rz0.js";import{C as g}from"./ComposedChart-CixY_uah.js";import{L as x}from"./Line-BMXJqgb8.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CqqO4xMX.js";import{T as V}from"./Tooltip-CKtfPjFs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./Text-K3oqQ0qr.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./Label-B4GKK3W-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./throttle-i1uEXwfS.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D7bj-nZi.js";import"./RechartsWrapper-B-nLjLBG.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./Curve-CLAbzDX3.js";import"./step-DJAY54DS.js";import"./path-DyVhHtw_.js";import"./LabelList-D_z7ECQv.js";import"./ActivePoints-D3cp_ck3.js";import"./Dot-fLjTiyXC.js";import"./activeStyles-DGXStsvL.js";import"./useAnimationId-DKXEwRJj.js";import"./dataEntryStyles-Df562HAt.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./ErrorBarContext-CkfaNLfH.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getRadiusAndStrokeWidthFromDot-DOd7rr-G.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-BNAtca7y.js";import"./uniqBy-9w4q5yQd.js";import"./iteratee-DZT4M3pu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CSn-JXVK.js";import"./Rectangle-C8mkpCGv.js";import"./util-Dxo8gN5i.js";import"./Sector-C172RoTQ.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
