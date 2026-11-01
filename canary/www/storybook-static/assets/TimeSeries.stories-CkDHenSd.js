import{R as e}from"./iframe-CKMzUQLl.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-BDBlWxDf.js";import{R as h}from"./zIndexSlice-COhM5Ssb.js";import{C as g}from"./ComposedChart-Br4fGf2D.js";import{L as x}from"./Line-BotpFDCu.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-uc_I_mt7.js";import{T as V}from"./Tooltip-BT_z6n7f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BPlDbcHH.js";import"./Layer-VHBsdASS.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./Text-CUuCMSti.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./Label-DwblDDwh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BANjW4O_.js";import"./throttle-cmQF6pk6.js";import"./types-DgiI7KOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BSZ3SCPn.js";import"./RechartsWrapper-bg3MvxI9.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./Curve-B0phiZsH.js";import"./fillDefinitions-D5lwwS81.js";import"./step-Wrr8d7OB.js";import"./path-DyVhHtw_.js";import"./LabelList-DO8MwQV1.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./activeStyles-CT0hkTay.js";import"./useAnimationId-DKuDzs92.js";import"./dataEntryStyles-2pl_sY7K.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./ErrorBarContext-CFogFGPo.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./useElementOffset-BGehcf2H.js";import"./uniqBy-qDOcKTVS.js";import"./iteratee-DrtJv-M1.js";import"./isArguments-yB-y1yaH.js";import"./Cross-IIL7sW25.js";import"./Rectangle-CaGbKQx_.js";import"./util-Dxo8gN5i.js";import"./Sector-BqPv5Kez.js";const zt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Gt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Gt as __namedExportsOrder,zt as default};
