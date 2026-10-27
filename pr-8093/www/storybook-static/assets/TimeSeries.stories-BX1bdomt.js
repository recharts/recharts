import{R as e}from"./iframe-BhkmDUK8.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-C6NctsPw.js";import{R as h}from"./zIndexSlice-Cx3NgCbD.js";import{C as g}from"./ComposedChart-BfTAH9AC.js";import{L as x}from"./Line-DgKeyyKw.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-6P_5w6kZ.js";import{T as V}from"./Tooltip-CqtGb3xQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BmcJMrp5.js";import"./Layer-DN_2iRDC.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./Text-DMX7oKTI.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./Label-BVWylkM-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./throttle-BvBRI7mu.js";import"./dataEntryStyles-BVrjnugi.js";import"./types-CU7_71qS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-CMvdSvcn.js";import"./index-DbiGNxfl.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-iANbDNdr.js";import"./RechartsWrapper-DFqlV8En.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./Curve-BHBAmygs.js";import"./step-Bs1-0DQI.js";import"./path-DyVhHtw_.js";import"./LabelList-CB1bAazX.js";import"./ActivePoints-BLD8htC5.js";import"./Dot-Cu6BzPzv.js";import"./activeStyles-Bn41iv6z.js";import"./useAnimationId-49rixTyB.js";import"./Symbols-DztLe2AE.js";import"./symbol-C9i3gtuu.js";import"./RegisterGraphicalItemId-BQIh3gpM.js";import"./ErrorBarContext-BtfMVugS.js";import"./SetGraphicalItem-B5IS3skS.js";import"./getRadiusAndStrokeWidthFromDot-B2MvN2Za.js";import"./ActiveShapeUtils-DRwsgq7-.js";import"./useEffectiveDataKey-C5G10thl.js";import"./useElementOffset-ButFEXKE.js";import"./uniqBy-DG4g_Lj4.js";import"./iteratee-B9qR9krY.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CQ1Th55I.js";import"./Rectangle-CulpOJA0.js";import"./util-Dxo8gN5i.js";import"./Sector-Dys_HLwg.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
