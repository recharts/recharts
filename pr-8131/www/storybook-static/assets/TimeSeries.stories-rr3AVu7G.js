import{R as e}from"./iframe-Dt9aG847.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-ChVo-6Tw.js";import{R as h}from"./zIndexSlice-C3sOwbsK.js";import{C as g}from"./ComposedChart-CpvmmgfC.js";import{L as x}from"./Line-CQGFi5Sl.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DLGbz4xh.js";import{T as V}from"./Tooltip-nmjqd8OH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DnXkFBgJ.js";import"./Layer-Z8zmzF48.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./Text-6YRDeSKh.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./Label-0OpL57DR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./throttle-DjDKvtka.js";import"./types-CAYyOejn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Bm-O_fE3.js";import"./RechartsWrapper-CgsNUza7.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./Curve-BqouQalk.js";import"./step-J3DdjOPx.js";import"./path-DyVhHtw_.js";import"./LabelList-Dmjy57ut.js";import"./ActivePoints-Djx8G9q2.js";import"./Dot-B7i9JEY2.js";import"./activeStyles-D2EMNXIV.js";import"./useAnimationId-CJa-E4MR.js";import"./dataEntryStyles-V0ugCGFO.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./ErrorBarContext-BlC639ix.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getRadiusAndStrokeWidthFromDot-BIO0J0B_.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./useEffectiveDataKey-DvT2OXI-.js";import"./useElementOffset-2orHetLh.js";import"./uniqBy-BigEltI1.js";import"./iteratee-CIF51Rnw.js";import"./isArguments-yB-y1yaH.js";import"./Cross-R3GIONbF.js";import"./Rectangle-DDhWHAzv.js";import"./util-Dxo8gN5i.js";import"./Sector-BNez6OaP.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
