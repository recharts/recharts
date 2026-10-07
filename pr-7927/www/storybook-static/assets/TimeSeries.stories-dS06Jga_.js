import{R as e}from"./iframe-d_I8TNCn.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CPk4rkW4.js";import{R as h}from"./zIndexSlice-C86-Fd8c.js";import{C as g}from"./ComposedChart-DeQBgJOI.js";import{L as x}from"./Line-DdMP5ELM.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BHQnpvaw.js";import{T as V}from"./Tooltip-8x1TIELh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C7wfh-vo.js";import"./Layer-yfSSiW9J.js";import"./resolveDefaultProps-DvL_oRGd.js";import"./Text--rvXV2DW.js";import"./DOMUtils-CklqBmUp.js";import"./isWellBehavedNumber-BiGXAn6V.js";import"./useId-CcoqHBc4.js";import"./useBackwardsCompatibleTheme-0Rfjr95D.js";import"./Label-C6LY1R7r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUsrGrDa.js";import"./index-Basp38ZP.js";import"./index-KJ9I69Vp.js";import"./types-Dqfpifaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-j8NF5Q.js";import"./throttle-Dub4vgX-.js";import"./index-Bk90M1L4.js";import"./index-IVp7d0na.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BhDfTeaQ.js";import"./axisSelectors-DS1SwPss.js";import"./index-BDSLAMRI.js";import"./CartesianChart-BkYu52zN.js";import"./chartDataContext-C_MhBuQy.js";import"./CategoricalChart-BaXgxPjJ.js";import"./Curve-7i5iRSvm.js";import"./step-Zcc4_rmH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-b-EDeVK-.js";import"./useAnimationId-BWx9Rtft.js";import"./ActivePoints-B3dHfjWU.js";import"./Dot-BDaArr9M.js";import"./RegisterGraphicalItemId-dmq8PwmH.js";import"./ErrorBarContext-D8HRGdCI.js";import"./GraphicalItemClipPath-BVkKFKzE.js";import"./SetGraphicalItem-q_w6KGtf.js";import"./getRadiusAndStrokeWidthFromDot-C7z_bU2f.js";import"./ActiveShapeUtils-ByVz5Hkp.js";import"./useGraphicalItemIdentity-BG-BVB46.js";import"./useElementOffset-jVsdCbSq.js";import"./uniqBy-Dn4KM-Ky.js";import"./iteratee-CwikYVCT.js";import"./Cross-DmHFzZ2Y.js";import"./Rectangle-EdaUCxay.js";import"./util-Dxo8gN5i.js";import"./Sector-DWNhUzO6.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
