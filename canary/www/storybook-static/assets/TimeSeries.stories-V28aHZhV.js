import{R as e}from"./iframe-nnpNEl0c.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DmxowzrZ.js";import{R as h}from"./zIndexSlice-BIxplyvp.js";import{C as g}from"./ComposedChart-CNqzZLnk.js";import{L as x}from"./Line-BBeoyI6l.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-WiXCw0il.js";import{T as V}from"./Tooltip-BM0Kh55K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BqAJOGeS.js";import"./Layer-CzHD4ald.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./Text-D0rrhxSu.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./Label-tyPo7vJI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./throttle-CIO-2ra4.js";import"./dataEntryStyles-BmV4LTxI.js";import"./types-BmjMrM54.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DWnmhIgM.js";import"./RechartsWrapper-VFnYK8V7.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./Curve-BBlYovqd.js";import"./step-BJvIh3cb.js";import"./path-DyVhHtw_.js";import"./LabelList-BNO7oHuM.js";import"./ActivePoints-J_iA54Fy.js";import"./Dot-BfnVBDM9.js";import"./activeStyles-iZJvEVBW.js";import"./useAnimationId-CJPhZ8Cq.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getRadiusAndStrokeWidthFromDot-DWNEs6NN.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./useElementOffset-D4m3W9N6.js";import"./uniqBy-BtFmVpwe.js";import"./iteratee-DDsc37Zm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BG3dlVif.js";import"./Rectangle-bTnZwyFx.js";import"./util-Dxo8gN5i.js";import"./Sector-BDC49zEQ.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
