import{R as e}from"./iframe-D34TH6kS.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-eUT57Vta.js";import{R as h}from"./zIndexSlice-DaIxnBgS.js";import{C as g}from"./ComposedChart-LEsvyFPs.js";import{L as x}from"./Line-CA8mNuGo.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DZnn2eaB.js";import{T as V}from"./Tooltip-BZwHxVtU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BM-PI8Qd.js";import"./Layer-Dwmoii2m.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./Text-DnFfEMnn.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./Label-Bmp2qp_V.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CB23D7zz.js";import"./throttle-BpT9ifnU.js";import"./types-sVdhE-m7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Dy4Zn44Z.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./Curve-DynZHvMF.js";import"./step-ClOyd6C_.js";import"./path-DyVhHtw_.js";import"./LabelList-1IdMTUqF.js";import"./ActivePoints-CrE_aMeq.js";import"./Dot-Dl99GL8N.js";import"./activeStyles-BhcCN1d0.js";import"./useAnimationId-B9qHmTzi.js";import"./dataEntryStyles-vZIv75R2.js";import"./Symbols-DvTMqivt.js";import"./symbol-CF9tVrFE.js";import"./ErrorBarContext-BpXycT31.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./getRadiusAndStrokeWidthFromDot-Cm9Ouxhm.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./useElementOffset-Ipbyi-Tm.js";import"./uniqBy-HVU5otxv.js";import"./iteratee-P8VRTjFX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BL7_RzjB.js";import"./Rectangle-CkQXoZfZ.js";import"./util-Dxo8gN5i.js";import"./Sector-d4TsYNLQ.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
