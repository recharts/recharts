import{R as e}from"./iframe-CVDCphxx.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BaXZzVL8.js";import{R as h}from"./zIndexSlice-D76eaAVt.js";import{C as g}from"./ComposedChart-CVNLcY4v.js";import{L as x}from"./Line-CBX_YG-s.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cu204p6o.js";import{T as V}from"./Tooltip-Bd8tlp4z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BZu_fnrb.js";import"./Layer-CMIguF8f.js";import"./resolveDefaultProps-B_5oDYmC.js";import"./Text-Dgr5qdov.js";import"./DOMUtils-DF_qw-1b.js";import"./isWellBehavedNumber-DVmFYWt0.js";import"./useId-CWzKPTKL.js";import"./useBackwardsCompatibleTheme-MdPX2i5n.js";import"./Label-CplunMl3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeV_pa6H.js";import"./index-BJO-ep7J.js";import"./index-BpxiUomY.js";import"./types-qF5qaMWi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B1XRs7d0.js";import"./throttle-t8E79NJX.js";import"./index-CihE6hhr.js";import"./index-DCMHKzI9.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DEnb7ufM.js";import"./axisSelectors-ChjpNCZD.js";import"./index-BJY-g_ad.js";import"./CartesianChart-D47jpHMU.js";import"./chartDataContext-C-FdSEwK.js";import"./CategoricalChart-D7b0lra6.js";import"./Curve-BAi3bHUk.js";import"./step-CnFrEUK7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHXlTf3v.js";import"./useAnimationId-Bwtwv5PP.js";import"./ActivePoints-wrDHu4bh.js";import"./Dot-DSiQ3Q_z.js";import"./RegisterGraphicalItemId-z4StfXHb.js";import"./ErrorBarContext-Dl0aWSaL.js";import"./GraphicalItemClipPath-C3-aN0c_.js";import"./SetGraphicalItem-Xr4kmH_o.js";import"./getRadiusAndStrokeWidthFromDot-BWSKjGaB.js";import"./ActiveShapeUtils-BczdQoPB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Dlxs2KSy.js";import"./uniqBy-BQLa7Owx.js";import"./iteratee-BocsKiRY.js";import"./Cross-BCjVITdc.js";import"./Rectangle-g52yuu9_.js";import"./util-Dxo8gN5i.js";import"./Sector-BxAve4eq.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
