import{R as e}from"./iframe-BB7QZXLs.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-XcDOkDmd.js";import{R as h}from"./zIndexSlice-tJAM9iWj.js";import{C as g}from"./ComposedChart-D3UkYazW.js";import{L as x}from"./Line-DKYrypTN.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-iQiKVngo.js";import{T as V}from"./Tooltip-DoDbxGsK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-ByfKlAGp.js";import"./Layer-07NELy8e.js";import"./resolveDefaultProps-CpmXZA4k.js";import"./Text-CEEsNHtu.js";import"./DOMUtils-C2ZnKXb0.js";import"./isWellBehavedNumber-BJy-JztG.js";import"./useId-BVIeIeeB.js";import"./useBackwardsCompatibleTheme-BKLDWadY.js";import"./Label-ssYRudSZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnNru_wJ.js";import"./index-dVHp78rg.js";import"./index-_M8YNH98.js";import"./types-D6b6NoLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qkMRB7Jj.js";import"./throttle-BIPObZtO.js";import"./index-VwBP7ySp.js";import"./index-DhA5-aT4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-e66Xzxgl.js";import"./axisSelectors-C9Ww97e2.js";import"./index-qzDpnTu9.js";import"./CartesianChart-D1IApd6R.js";import"./chartDataContext-CBZ7yVc5.js";import"./CategoricalChart-DG2kQqAq.js";import"./Curve-D5V2G3nc.js";import"./step-CzTEwmSX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHb_g3It.js";import"./useAnimationId-C1x4gWZO.js";import"./ActivePoints-DEZf8Tp_.js";import"./Dot-DKFbKC0m.js";import"./RegisterGraphicalItemId-BrQFxchm.js";import"./ErrorBarContext-Cj0JdL2W.js";import"./GraphicalItemClipPath-DgpfNhEU.js";import"./SetGraphicalItem-BRob5fGw.js";import"./getRadiusAndStrokeWidthFromDot-k1yLnap7.js";import"./ActiveShapeUtils-CHeKF_6U.js";import"./useGraphicalItemIdentity-DsYSBEP4.js";import"./useElementOffset-DY1y9jVd.js";import"./uniqBy-D1Ian6I1.js";import"./iteratee-Ch-bm_Fu.js";import"./Cross-C7gJ0tvS.js";import"./Rectangle-BdgR7Lei.js";import"./util-Dxo8gN5i.js";import"./Sector-BmSMlVZs.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
