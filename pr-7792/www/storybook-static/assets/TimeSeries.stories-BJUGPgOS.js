import{R as e}from"./iframe-CZvBVoM1.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BwD_71l-.js";import{R as h}from"./zIndexSlice-BFsaUhqg.js";import{C as g}from"./ComposedChart-CMms7XdW.js";import{L as x}from"./Line-DiOtpcO9.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CYHPrWE0.js";import{T as V}from"./Tooltip-D-0A-dub.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BSKOevSQ.js";import"./Layer-BOzNA3ZR.js";import"./resolveDefaultProps-D-jdsqZa.js";import"./Text-N_3Dav1R.js";import"./DOMUtils-GcGnpUs3.js";import"./isWellBehavedNumber-DwVpyNCs.js";import"./useId-r81p-TMa.js";import"./useBackwardsCompatibleTheme-CTIdE2S0.js";import"./Label-CXH4SBDp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9FERMeL.js";import"./index--IdmBhgA.js";import"./index-De4B3ZIK.js";import"./types-SdWXGAN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZCA8OL1.js";import"./throttle-DKdITuKH.js";import"./index-B6TkzWSy.js";import"./index-B9F-HAZ2.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DpE83LkU.js";import"./axisSelectors-DObFO88m.js";import"./index-WmPIOj3u.js";import"./CartesianChart-BODelrhP.js";import"./chartDataContext-DBey5Kyz.js";import"./CategoricalChart-rBPlq3sD.js";import"./Curve-CMGEeLJ1.js";import"./step-BaGdmwmz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-a9Nj57gp.js";import"./useAnimationId-CmzTxAaG.js";import"./ActivePoints-BlDBLjzI.js";import"./Dot-WxQzlPyE.js";import"./RegisterGraphicalItemId-B0jJiuk8.js";import"./ErrorBarContext-B64_fw23.js";import"./GraphicalItemClipPath-X4UZrOjX.js";import"./SetGraphicalItem-CjJbMcaD.js";import"./getRadiusAndStrokeWidthFromDot-Cq0DuT0s.js";import"./ActiveShapeUtils-DBOPu4wl.js";import"./useGraphicalItemIdentity-ftydmPqi.js";import"./useElementOffset-CrJNpn31.js";import"./uniqBy-DE6IhfWE.js";import"./iteratee-qUhlXCDP.js";import"./Cross-BUCtaLji.js";import"./Rectangle-_nXXHIrs.js";import"./util-Dxo8gN5i.js";import"./Sector-DC6oeHZi.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
