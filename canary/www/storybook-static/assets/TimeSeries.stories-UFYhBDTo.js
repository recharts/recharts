import{R as e}from"./iframe-7ia7cOns.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CyA_GXTr.js";import{R as h}from"./zIndexSlice-CNZG0Y5y.js";import{C as g}from"./ComposedChart-Dkz69e1N.js";import{L as x}from"./Line-C0Z-Ezm6.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DDTCvpuX.js";import{T as V}from"./Tooltip-C4oc2Rl5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-B17J1uIc.js";import"./Layer-DH-Bpj5F.js";import"./resolveDefaultProps-C774hdeP.js";import"./Text-CkBg3X4g.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./Label-Y02zXLeF.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./throttle-CuvGuAUJ.js";import"./types-CoWppO1p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D31_gBEg.js";import"./RechartsWrapper-CDikf3PH.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./Curve-DRmYCb_P.js";import"./step-DopNAfqi.js";import"./path-DyVhHtw_.js";import"./LabelList-BkznOaj8.js";import"./ActivePoints-B8drpMZ8.js";import"./Dot-djHPvui5.js";import"./activeStyles-CyfixWYK.js";import"./useAnimationId-dFi6qGfW.js";import"./dataEntryStyles-B9lOpBft.js";import"./fillDefinitions-Bh-Idu0v.js";import"./themeFill-B_wPexqX.js";import"./Symbols-COiuuhwV.js";import"./symbol-Q9XLyBk-.js";import"./ErrorBarContext-CxoeLCh5.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getRadiusAndStrokeWidthFromDot-CWANwgvT.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./useElementOffset-CLrMTlCN.js";import"./uniqBy-BdDgBJqj.js";import"./iteratee-7m6p-S4N.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dv-7A8UM.js";import"./Rectangle-nIz-cHMY.js";import"./util-Dxo8gN5i.js";import"./Sector-DG3Kvf8d.js";const zt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Gt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
