import{R as e}from"./iframe-tjocxRUU.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-Ds3HH0B9.js";import{R as h}from"./zIndexSlice-Dxy8HPki.js";import{C as g}from"./ComposedChart-D8w-MoC_.js";import{L as x}from"./Line-D_gGwljF.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DxsTJ-Fh.js";import{T as V}from"./Tooltip-Vo_i0ifx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DzErZjsk.js";import"./Layer-YyRceVq5.js";import"./resolveDefaultProps-BcfnasjV.js";import"./Text-DmRL3-09.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./Label-CDvz32IL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D1WllP0e.js";import"./throttle-BtJBXhY8.js";import"./dataEntryStyles-D26LCbZx.js";import"./types-C53JcC0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Bh1ZEFRN.js";import"./RechartsWrapper-CFmoW3Jf.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./Curve-D8fqT8cR.js";import"./step-BxgewTFX.js";import"./path-DyVhHtw_.js";import"./LabelList-C2EwX980.js";import"./ActivePoints-CR8eCzMX.js";import"./Dot-C1-AWakF.js";import"./activeStyles-BO5quCC2.js";import"./useAnimationId-g7Nwbj-R.js";import"./Symbols-eM89l6Zr.js";import"./symbol-aequuKRH.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getRadiusAndStrokeWidthFromDot-wnLtIjnO.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./useElementOffset-Cwd9kaUJ.js";import"./uniqBy-CCosKpyN.js";import"./iteratee-BVYnyUcL.js";import"./isArguments-yB-y1yaH.js";import"./Cross-A6Z2fQ3g.js";import"./Rectangle-nUsjOQfN.js";import"./util-Dxo8gN5i.js";import"./Sector-B1OZU1uB.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
