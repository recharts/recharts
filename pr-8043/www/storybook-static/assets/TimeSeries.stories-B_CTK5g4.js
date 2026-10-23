import{R as e}from"./iframe-x9YCwuVc.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DOrrA_AO.js";import{R as h}from"./zIndexSlice-BV1eDa8t.js";import{C as g}from"./ComposedChart-vHYW6JZh.js";import{L as x}from"./Line-B5t4aXxo.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DeFHX2Lm.js";import{T as V}from"./Tooltip-CXDzUWmd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C1FOk_u6.js";import"./Layer-byU46PKm.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./Label-BWVi17tM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DrSAG7iO.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./types-fCYwQ83-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./throttle-CFpl0b0L.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DUrnAUTK.js";import"./RechartsWrapper-DuSi3yuo.js";import"./index-BC2a9-E_.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./Curve-8b-Qxogq.js";import"./step-DWJVpFVS.js";import"./path-DyVhHtw_.js";import"./activeStyles-B5NsC4ZM.js";import"./useAnimationId-DxnlQorl.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./ErrorBarContext-a5it_Nak.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./useElementOffset-Q7vbrrOH.js";import"./uniqBy-bvQ6Ay4K.js";import"./iteratee-_rf4IMM8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B9ZBBQd6.js";import"./Rectangle-B-VzFgv3.js";import"./util-Dxo8gN5i.js";import"./Sector-e9C-YfcB.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
