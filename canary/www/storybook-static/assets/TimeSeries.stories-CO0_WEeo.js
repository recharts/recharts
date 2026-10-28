import{R as e}from"./iframe-BC-aHfbH.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-q4A2d4Zb.js";import{R as h}from"./zIndexSlice-ALhwVSt9.js";import{C as g}from"./ComposedChart-DeGO-OTb.js";import{L as x}from"./Line-DxnNynrS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BzoWDajH.js";import{T as V}from"./Tooltip-C3biscPT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CunRUAHg.js";import"./Layer-C9TfFY4n.js";import"./resolveDefaultProps-4x113t0l.js";import"./Text-DARS5OxC.js";import"./pageBackground-Dg-zxncN.js";import"./ZIndexLayer-PUdKiesE.js";import"./index-B-RSdHgQ.js";import"./index-Dvj4AXX_.js";import"./Label-Dza1R5dY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEKrNeLt.js";import"./throttle-a7-GQed4.js";import"./dataEntryStyles-xanZasRf.js";import"./types-CqRAzbay.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3P53zmh.js";import"./index-ByUj-B7C.js";import"./index-C7cb-ZYS.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D-qF4r4u.js";import"./RechartsWrapper-B9wYdCxx.js";import"./index-BCHOiCIM.js";import"./CartesianChart-CLm_Ee8q.js";import"./ZIndexPortal-BGbnB8Y2.js";import"./CategoricalChart--pFm79aa.js";import"./Curve-C_X7-rik.js";import"./step-C9BhyMMw.js";import"./path-DyVhHtw_.js";import"./LabelList-BVv1SXpb.js";import"./ActivePoints-CYbwYUVg.js";import"./Dot-DCOyOMOq.js";import"./activeStyles-1D-OxyIQ.js";import"./useAnimationId-Dd0TyqHP.js";import"./Symbols-BzxAfvdI.js";import"./symbol-DmUuFZcN.js";import"./RegisterGraphicalItemId-BsiO5PX-.js";import"./ErrorBarContext-C6fbu3f2.js";import"./SetGraphicalItem-B0IeAy6L.js";import"./getRadiusAndStrokeWidthFromDot-B9BWJY7Y.js";import"./ActiveShapeUtils-DJ-tBBEV.js";import"./useEffectiveDataKey-CqM8v6g-.js";import"./useElementOffset-CkUyr6Xi.js";import"./uniqBy-BX-k5AJw.js";import"./iteratee-BGB8LHfi.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CO7DiNyk.js";import"./Rectangle-FJmdRxpu.js";import"./util-Dxo8gN5i.js";import"./Sector-Ce4H6Qmp.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
