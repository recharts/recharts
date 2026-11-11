import{R as e}from"./iframe-DnaR6K_4.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-JXd9qzo8.js";import{R as h}from"./zIndexSlice-HRkrVJ9X.js";import{C as g}from"./ComposedChart-D_61vaIh.js";import{L as x}from"./Line-BiRiWgrj.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BgvfK_mE.js";import{T as V}from"./Tooltip-Gq9KpMi8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CAMeCfaf.js";import"./Layer-BH_fCpBP.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./Text-Lh_HZPYn.js";import"./ZIndexLayer-B1l-eSb9.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./Label-BEN9LI2d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./throttle-CmS6TmXS.js";import"./types-Dnad10Cx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-DmfGSg0J.js";import"./index-D5D7Mpig.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BZT-kfpn.js";import"./RechartsWrapper-CRNPPXNH.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./Curve-nkhv6z3O.js";import"./step-CWTcW_Xz.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BUjHKeGu.js";import"./ActivePoints-BGPPfRbm.js";import"./Dot-CMPD7QLc.js";import"./activeStyles-WfyfS5co.js";import"./useAnimationId-DvJiKZIl.js";import"./Symbols-ClvwSwOZ.js";import"./symbol-QpFOfTRN.js";import"./ErrorBarContext-Bc_t8m9L.js";import"./SetGraphicalItem-DJe9VMWh.js";import"./getRadiusAndStrokeWidthFromDot-EcMggKSX.js";import"./ActiveShapeUtils-jyclsiEg.js";import"./useEffectiveDataKey-BtEPyz6t.js";import"./useElementOffset-1fsM2BLX.js";import"./uniqBy-BerQeZ6C.js";import"./iteratee-BOqKd5kc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BzVInf1h.js";import"./Rectangle-Dgg35g8F.js";import"./util-Dxo8gN5i.js";import"./Sector-C-O6fWmF.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
